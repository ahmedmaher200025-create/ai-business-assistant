const tools = {
  post: {title:"منشئ المنشورات", make:(b,t,a,d)=>`✨ ${b || "اسم مشروعك"}\n\n${d || "اكتشفوا تجربة مختلفة ومميزة معنا!"}\n\nبنقدّم لكم ${t} بجودة واهتمام بالتفاصيل، علشان تجربتكم تكون أفضل كل مرة.\n\n📩 ابعتولنا رسالة واعرفوا التفاصيل.\n\n#${(b||"مشروعك").replace(/\s+/g,"_")} #مشروعات_صغيرة`},
  ad: {title:"كاتب الإعلانات", make:(b,t,a,d)=>`عنوان الإعلان:\n${b || "اختار الأفضل ليك"} — الجودة اللي تستحقها!\n\nالنص الإعلاني:\nلو بتدور على ${d || "خدمة أو منتج مميز"}، ${b || "إحنا"} هنا علشان نسهّل عليك الاختيار. تجربة تهتم بالتفاصيل وتناسب احتياجك.\n\nالجمهور المستهدف: ${a || "عملاؤك المحتملون"}\n\nالدعوة لاتخاذ إجراء (CTA): تواصل معانا دلوقتي واعرف التفاصيل.`},
  ideas: {title:"أفكار محتوى", make:(b,t,a,d)=>`أفكار محتوى مقترحة لـ ${b || "مشروعك"}:\n\n1. قصة بداية المشروع: إزاي بدأتوا وإيه اللي بيميزكم؟\n2. معلومة سريعة: نصيحة مفيدة مرتبطة بمجال ${t}.\n3. كواليس العمل: ورّوا الجمهور جزء من تجهيز المنتج أو تقديم الخدمة.\n4. سؤال للجمهور: اسألوا ${a || "متابعينكم"} عن احتياجهم أو تفضيلاتهم.\n5. عرض أو ميزة: وضّحوا قيمة ${d || "منتجكم أو خدمتكم"} بطريقة بسيطة.\n6. رأي عميل: شاركوا تجربة حقيقية بعد الحصول على موافقته.`},
  plan: {title:"خطة تسويق أسبوعية", make:(b,t,a,d)=>`خطة أسبوعية مبدئية لـ ${b || "مشروعك"}:\n\nالسبت: منشور تعريفي بالمشروع وما يقدمه.\nالأحد: نصيحة أو معلومة مفيدة في مجال ${t}.\nالاثنين: صورة أو فيديو يوضح ${d || "منتج أو خدمة"}.\nالثلاثاء: سؤال تفاعلي للجمهور (${a || "العملاء المحتملون"}).\nالأربعاء: إبراز ميزة تنافسية أو إجابة عن سؤال متكرر.\nالخميس: مشاركة تقييم عميل حقيقي بإذنه.\nالجمعة: مراجعة النتائج وتحديد أفضل محتوى للأسبوع القادم.\n\nملاحظة: عدّل المواعيد حسب نشاط جمهورك ونتائج حساباتك.`}
};
let current = "post";
const $ = id => document.getElementById(id);
document.querySelectorAll(".tool").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".tool").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active"); current=btn.dataset.tool; $("toolTitle").textContent=tools[current].title;
}));
$("generate").addEventListener("click", () => {
  const output=tools[current].make($("business").value.trim(),$("type").value,$("audience").value.trim(),$("details").value.trim());
  $("result").textContent=output; $("result").classList.remove("empty"); $("copy").disabled=false;
});
$("copy").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText($("result").textContent); $("copy").textContent="تم النسخ ✓"; setTimeout(()=>$("copy").textContent="نسخ النص",1600); }
  catch(e) { $("copy").textContent="انسخ يدويًا"; }
});