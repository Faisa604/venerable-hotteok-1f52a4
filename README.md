# جريدة الجبنة

موقع جريدة ساخرة عربية — أرشيف ٧ أعداد مصوّرة (كرتي، عكاشة، عدوي، هيتو، أسامة، البت الحديقة ×٢) مع قراءات مقالية، فلترة بالوسوم (اجتماعي/ساخر/شعري/الشخصيات)، وبحث فوري. صفحة واحدة مع تنقل بالـ anchors + صفحات مخصصة لكل عدد ومقال.

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

## إضافة مقال قديم (legacy)

أضف ملف Markdown داخل `content/posts/` بحقول `title`, `summary`, `categories`, `author`, `date`, `image`. راجع `content-collections.ts` و `AGENTS.md`.

## البنية

راجع `AGENTS.md` لخريطة المجلدات الكاملة ونموذج المحتوى.
