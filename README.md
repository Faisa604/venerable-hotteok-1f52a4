# جريدة الجبنة

موقع جريدة ساخرة عربية — أرشيف ٧ أعداد مصوّرة بست شخصيات أصلية (كرتي، عكاشة، عدوي، هيتو، أسامة، البت الحديقة في العددين ٦ و٧) مع معرض للشخصيات، بطاقات مقالات مختصرة، صفحات قراءة كاملة، ومشاركة عبر واتساب.

تطورت من نسخة "الرصيف" الأولية إلى أرشيف كامل مصوّر (سبتمبر ٢٠٢٦).

## التقنيات المستخدمة

- **TanStack Start** (React 19 + TanStack Router) — التطبيق والتوجيه
- **Vite 7** — أداة البناء
- **Tailwind CSS 4** — التنسيق، مع متغيرات تصميم مخصصة في `src/styles.css`
- **Content Collections** — للمحتوى القديم `content/posts/` + مخطط اختياري `content/issues/`، بينما المصدر الأساسي الحالي هو `src/data/issues.ts`
- **TypeScript** (strict mode)
- **Netlify** — النشر

## تشغيل المشروع محلياً

```bash
npm install
npm run dev
```

يفتح الموقع على المنفذ 3000. للمحاكاة عبر Netlify:

```bash
netlify dev --port 8889
```

## إضافة عدد جديد

1. أضف كائن جديد إلى `ISSUES` و `ARTICLES` في `src/data/issues.ts` (انسخ بنية عدد موجود، غيّر `id`, `n`, `headline`, `tags`, ومسارات الصور).
2. (اختياري) أضف ملف Markdown مرآة في `content/issues/عدد-08.md` — راجع `content-collections.ts`.
3. ضع صور الغلاف في `public/covers/original/` وشغّل `python convert.py` لتوليد نسخ الـ webp/jpg.

## إضافة شخصية جديدة

1. أضف عددها الأول إلى `ISSUES` ومقالها إلى `ARTICLES` في `src/data/issues.ts`، واجعل قيمة `character` ثابتة في كل أعداد الشخصية.
2. ضع الغلاف الأصلي في `public/covers/original/` ثم ولّد النسخ المحسنة عبر `python convert.py`.
3. سيظهر المعرض تلقائيًا كشخصية واحدة اعتمادًا على قيمة `character`، حتى لو ظهرت الشخصية في أكثر من عدد. لا تغيّر أرقام الأعداد السابقة؛ أضف العدد الجديد برقم متسلسل.
4. أضف ملف Markdown المرآة اختياريًا داخل `content/issues/` إذا كان المحتوى سيُدار أيضًا عبر Content Collections.

## إضافة مقال قديم (legacy)

أضف ملف Markdown داخل `content/posts/` بحقول `title`, `summary`, `categories`, `author`, `date`, `image`. راجع `content-collections.ts` و `AGENTS.md`.

## البنية

راجع `AGENTS.md` لخريطة المجلدات الكاملة ونموذج المحتوى.
