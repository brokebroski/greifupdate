#!/usr/bin/env python3
"""Generates the order (приказ) PDF for the personal data processing policy."""

from fpdf import FPDF, XPos, YPos

FONT_REGULAR = '/Library/Fonts/Arial Unicode.ttf'
FONT_BOLD    = '/Library/Fonts/Arial Unicode.ttf'  # same file; bold via style

COMPANY_FULL  = 'Общество с ограниченной ответственностью «ГРАЙФ ПЕРМЬ»'
COMPANY_SHORT = 'ООО «ГРАЙФ ПЕРМЬ»'
CITY          = 'г. Пермь'

ORDER_NUMBER  = '___'
ORDER_DATE    = '«___» _______________ 2026 г.'
EFFECTIVE_DATE = '«___» _______________ 2026 г.'

DIRECTOR_TITLE = 'Генеральный директор'
DIRECTOR_NAME  = 'А.В. ___________'   # placeholder


class PrikazPDF(FPDF):
    def __init__(self):
        super().__init__(format='A4')
        self.add_font('Arial', '', FONT_REGULAR)
        self.add_font('Arial', 'B', FONT_BOLD)
        self.set_margins(25, 20, 20)
        self.set_auto_page_break(auto=True, margin=20)

    # ── helpers ─────────────────────────────────────────────────────────────

    def par(self, text, size=11, bold=False, align='J', indent=0, after=4):
        self.set_font('Arial', 'B' if bold else '', size)
        if indent:
            self.set_x(self.l_margin + indent)
        self.multi_cell(0, 6, text, align=align,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        if after:
            self.ln(after)

    def hline(self, thickness=0.4):
        self.set_line_width(thickness)
        self.line(self.l_margin, self.get_y(),
                  self.w - self.r_margin, self.get_y())
        self.ln(3)

    def stamp_row(self, label, value, size=10):
        """Right-aligned two-line stamp entry."""
        col_w = 85
        x = self.w - self.r_margin - col_w
        self.set_xy(x, self.get_y())
        self.set_font('Arial', 'B', size)
        self.cell(col_w, 5, label, align='L',
                  new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_xy(x, self.get_y())
        self.set_font('Arial', '', size)
        self.multi_cell(col_w, 5, value, align='L',
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(3)

    def clause(self, number, text, size=11):
        """Numbered clause with hanging indent."""
        self.set_font('Arial', 'B', size)
        num_w = 12
        x0 = self.l_margin
        y0 = self.get_y()
        self.set_xy(x0, y0)
        self.cell(num_w, 6, number)
        self.set_font('Arial', '', size)
        self.set_xy(x0 + num_w, y0)
        self.multi_cell(0, 6, text, align='J',
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(2)

    def bullet(self, text, size=11, indent=12):
        self.set_font('Arial', '', size)
        bul_w = 6
        x0 = self.l_margin + indent
        y0 = self.get_y()
        self.set_xy(x0, y0)
        self.cell(bul_w, 6, '–')
        self.set_xy(x0 + bul_w, y0)
        self.multi_cell(0, 6, text, align='J',
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1)


def build_pdf():
    pdf = PrikazPDF()
    pdf.add_page()

    # ── Header ──────────────────────────────────────────────────────────────
    pdf.par(COMPANY_FULL.upper(), size=11, bold=True, align='C', after=2)
    pdf.hline()

    pdf.ln(8)
    pdf.par('ПРИКАЗ', size=16, bold=True, align='C', after=2)
    pdf.par(f'{ORDER_DATE}   № {ORDER_NUMBER}', size=11, align='C', after=1)
    pdf.par(CITY, size=11, align='C', after=8)

    pdf.par(
        'Об утверждении Политики обработки персональных данных\n'
        f'в {COMPANY_SHORT}',
        size=12, bold=True, align='C', after=8
    )

    # ── Preamble ─────────────────────────────────────────────────────────────
    pdf.par(
        f'В целях исполнения требований Федерального закона от 27  июля 2006 г. '
        '№ 152-ФЗ «О персональных данных», в соответствии с требованиями '
        'части 2 статьи 18.1 указанного Федерального закона, а также в целях '
        'надлежащей организации обработки и защиты персональных данных в '
        f'{COMPANY_SHORT} —',
        size=11, align='J', after=6
    )

    pdf.par('ПРИКАЗЫВАЮ:', size=11, bold=True, align='L', after=6)

    # ── Clauses ──────────────────────────────────────────────────────────────
    pdf.clause(
        '1.',
        f'Утвердить Политику обработки персональных данных в {COMPANY_SHORT} '
        '(далее — «Политика») согласно приложению к настоящему Приказу.'
    )
    pdf.clause(
        '2.',
        f'Опубликовать Политику на официальном сайте {COMPANY_SHORT} в '
        'информационно-телекоммуникационной сети «Интернет» по адресу: '
        'greif.ru — в срок не позднее 3 (трёх) рабочих дней с даты подписания '
        'настоящего Приказа.'
    )
    pdf.clause(
        '3.',
        'Назначить лицом, ответственным за организацию обработки персональных '
        f'данных в {COMPANY_SHORT}, __________________________________ '
        '(должность, фамилия, инициалы).'
    )
    pdf.clause(
        '4.',
        'Лицу, ответственному за организацию обработки персональных данных, '
        'обеспечить:'
    )

    items_4 = [
        'ознакомление работников, осуществляющих обработку персональных данных, '
        'с настоящим Приказом и Политикой под роспись в срок до '
        f'{EFFECTIVE_DATE};',
        'разработку и утверждение локальных нормативных актов '
        f'{COMPANY_SHORT} в области обработки и защиты персональных данных, '
        'конкретизирующих положения Политики, в срок до '
        f'{EFFECTIVE_DATE};',
        'осуществление внутреннего контроля соответствия обработки '
        'персональных данных требованиям Федерального закона № 152-ФЗ '
        'и настоящей Политики.',
    ]
    for item in items_4:
        pdf.bullet(item, indent=14)

    pdf.ln(2)

    pdf.clause(
        '5.',
        'Признать утратившими силу ранее принятые локальные нормативные акты '
        f'{COMPANY_SHORT} по вопросам политики обработки персональных данных '
        '(при наличии) с даты вступления в силу настоящего Приказа.'
    )
    pdf.clause(
        '6.',
        'Контроль за исполнением настоящего Приказа оставляю за собой.'
    )
    pdf.clause(
        '7.',
        f'Настоящий Приказ вступает в силу с даты его подписания и действует '
        'бессрочно до его отмены или замены.'
    )

    pdf.ln(8)

    # ── Signature block ───────────────────────────────────────────────────────
    sig_col = 80
    gap = 20
    right_col = pdf.w - pdf.r_margin - sig_col

    y = pdf.get_y()
    pdf.set_font('Arial', '', 11)

    # left: title
    pdf.set_xy(pdf.l_margin, y)
    pdf.cell(sig_col, 6, DIRECTOR_TITLE, align='L')

    # right: name placeholder
    pdf.set_xy(right_col, y)
    pdf.cell(sig_col, 6, DIRECTOR_NAME, align='L',
             new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    pdf.ln(16)

    # ── Appendix note ─────────────────────────────────────────────────────────
    pdf.hline(thickness=0.2)
    pdf.set_font('Arial', '', 10)
    pdf.multi_cell(
        0, 5,
        'Приложение: Политика обработки персональных данных в '
        f'{COMPANY_SHORT} (на ___ л. в 1 экз.).',
        align='L', new_x=XPos.LMARGIN, new_y=YPos.NEXT
    )

    out_path = '/Users/aleksandrgolubev/Desktop/site_structure/Приказ_об_утверждении_Политики_ПД.pdf'
    pdf.output(out_path)
    print(f'PDF saved: {out_path}')


if __name__ == '__main__':
    build_pdf()
