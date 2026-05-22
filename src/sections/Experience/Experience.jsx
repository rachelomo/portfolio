import { motion } from "framer-motion"

const experiences = [
{
year: "2025 - Present",

role: "Full Stack Developer",

company: "Freelance",

desc:
"Building modern web applications for global clients.",

tech: [
"React",
"Next.js",
"Node.js",
],
},

{
year: "2024 - 2025",

role: "Frontend Developer",

company: "remxyPlug",

desc:
"Built responsive web apps, integrated APIs and optimized performance for better user experience.",

tech: [
"React",
"TypeScript",
"Tailwind",
],
},

{
year: "2023 - 2024",

role:
"Software Development IT Institute",

company:
"Malhub",

desc:
"Worked on real-world projects using maintainable code and collaborative workflows.",

tech: [
"HTML",
"CSS",
"JavaScript",
"Tailwind",
"PHP",
"Laravel",
"React",
"Node",
"MySQL",
"Git",
],
},
]

const container = {
hidden: {},

visible: {
transition: {
staggerChildren: .22,
},
},
}

const item = {
hidden: {
opacity: 0,
y: 70,
},

visible: {
opacity: 1,
y: 0,

transition: {
duration: .8,
},
},
}

export default function Experience() {
return (

<motion.section

initial="hidden"

whileInView="visible"

viewport={{
once: true,
amount: .15,
}}

variants={container}

className="
relative

overflow-hidden

bg-[#04030B]

text-white

py-24

px-6
md:px-16
"
>

{/* GLOW */}

<div
className="
absolute

left-1/2
top-0

translate-x-[-50%]

w-[600px]
h-[600px]

bg-purple-700/10

blur-[180px]
"
/>

<div
className="
relative

z-10

max-w-6xl

mx-auto
"
>

{/* HEADER */}

<motion.div variants={item}>

<p
className="
text-xs 
text-[10px] 
sm:text-[11px]

tracking-[0.25em]

text-gray-400

mb-3
"
>

EXPERIENCE

</p>

</motion.div>

{/* TIMELINE */}

<div
className="
relative

pl-8
md:pl-16

space-y-10
"
>

{/* LINE */}

<motion.div

initial={{
height: 0,
}}

whileInView={{
height: "100%",
}}

viewport={{
once: true,
}}

transition={{
duration: 1.6,
}}

className="
absolute

left-[6px]
md:left-[14px]

top-0

w-[2px]

bg-gradient-to-b

from-purple-500
via-purple-400
to-transparent
"
/>

{
experiences.map(
(exp, i) => (

<motion.div

key={i}

variants={item}

whileHover={{
y: -6,
}}

className="
relative
"
>

{/* DOT */}

<motion.div

animate={{
scale: [1, 1.25, 1],
}}

transition={{
duration: 2,
repeat: Infinity,
}}

className="
absolute

left-[-10px]
md:left-[-18px]

top-8

w-5
h-5

rounded-full

bg-purple-500

shadow-[0_0_25px_#8B5CF6]
"
/>

{/* CARD */}

<div
className="
rounded-[26px]

border

border-white/10

bg-white/[0.03]

backdrop-blur-xl

p-8

shadow-[0_0_80px_rgba(139,92,246,.08)]

transition-all
"
>

<p
className="
text-sm

text-purple-300

mb-4
"
>

{exp.year}

</p>

<h3
className="
text-2xl
 font-medium

            leading-[1.25]

              text-[10px]
          sm:text-[11px]
"
>

{exp.role}

</h3>

<p
className="
text-gray-400

mt-2
"
>

{exp.company}

</p>

<p
className="
mt-6

text-gray-300

leading-8
text-[12px]
          sm:text-[13px]
          lg:text-[14px]

"
>

{exp.desc}

</p>

{/* TECH */}

<div
className="
flex

flex-wrap

gap-3

mt-8
"
>

{
exp.tech.map(
(
t,
idx
) => (

<motion.span

key={idx}

whileHover={{
scale: 1.08,
}}

className="
px-4
py-2

rounded-full

text-sm

bg-[#0E0C18]

border

border-[#2C2542]

text-gray-300
"
>

{t}

</motion.span>

)
)
}

</div>

</div>

</motion.div>

)
)
}

</div>

</div>

</motion.section>

)
}