import { useEffect, useRef } from "react";

const features = [
  {
    title: "Объём и 3D-глубина",
    text: "3D-печать создаёт ощущение пространства, линий и форм, которые можно не только увидеть, но и почувствовать.",
    animation: "hover:scale-105 transition-transform duration-500"
  },
  {
    title: "Высокое качество и детализация",
    text: "Печать передаёт мельчайшие детали и оттенки с точностью, соответствующей задумке.",
    animation: "opacity-0 blur-sm translate-y-4 animate-fade-in"
  },
  {
    title: "Высокая скорость",
    text: "Изображение наносится за считанные часы. Почти мгновенное преображение пространства.",
    animation: "bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%] animate-shine"
  },
  {
    title: "Индивидуальность",
    text: "Каждая фреска создаётся под интерьер. Сюжет, фактура и цвета — индивидуальны.",
    animation: "animate-slide-up opacity-0"
  },
  {
    title: "Художественное освещение",
    text: "Фреска по-разному раскрывается при разном свете. Подсветка создаёт атмосферу.",
    animation: "animate-glow"
  },
  {
    title: "Экологичность",
    text: "Мы используем экологичные краски — безопасные и долговечные.",
    animation: "animate-grow"
  },
  {
    title: "Интерактив",
    text: "Поддержка AR и 3D-визуализации для нового уровня вовлечения.",
    animation: "animate-pulse cursor-pointer"
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Наши возможности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={\`bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur-md \${feature.animation}\`}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
