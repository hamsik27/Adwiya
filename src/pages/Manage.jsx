```jsx
export default function ManagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 to-indigo-900 text-white font-extrabold flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-teal-700 rounded-2xl shadow-2xl p-8 space-y-6">
        <h1 className="text-4xl text-center mb-8">إدارة الأدوية</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="medName" className="block mb-1">
              اسم الدواء
            </label>
            <input
              id="medName"
              type="text"
              placeholder="أدخل اسم الدواء"
              className="w-full p-3 rounded-lg bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <div>
            <label htmlFor="dose" className="block mb-1">
              الجرعة (ملغ)
            </label>
            <input
              id="dose"
              type="number"
              placeholder="مثال: ٥٠"
              className="w-full p-3 rounded-lg bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <div>
            <label htmlFor="frequency" className="block mb-1">
              التكرار
            </label>
            <select
              id="frequency"
              className="w-full p-3 rounded-lg bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <option>مرة واحدة</option>
              <option>كل ٦ ساعات</option>
              <option>كل ١٢ ساعة</option>
              <option>كل يوم</option>
            </select>




---

**Support Pollinations.AI:**

---

🌸 **Ad** 🌸
Powered by Pollinations.AI free text APIs. [Support our mission](https://pollinations.ai/redirect/kofi) to keep AI accessible for everyone.         