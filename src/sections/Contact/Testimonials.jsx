import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
{
text:
"Rachael delivered clean and responsive frontend components with strong attention to detail and user experience.",

name:
"Daniel Brooks",

role:
"Product Manager",

image:
"https://randomuser.me/api/portraits/men/32.jpg",
},

{
text:
"Rachael contributed effectively to the frontend team, delivering responsive interfaces and maintaining clean code practices.",

name:
"Michael Adams",

role:
"Frontend Developer",

image:
"https://randomuser.me/api/portraits/men/41.jpg",
},

{
text:
"Strong attention to UI details and collaboration. She adapted quickly to team workflows and project requirements.",

name:
"Emily Johnson",

role:
"Project Coordinator",

image:
"https://randomuser.me/api/portraits/women/65.jpg",
},
]

const container = {
hidden: {
opacity: 0,
y: 80,
},

visible: {
opacity: 1,
y: 0,

transition: {
duration: .8,
staggerChildren: .18,
},
},
}

const item = {
hidden: {
opacity: 0,
y: 35,
},

visible: {
opacity: 1,
y: 0,

transition: {
duration: .7,
},
},
}

export default function Testimonials() {
const [index, setIndex] =
useState(0)

useEffect(() => {
const interval =
setInterval(() => {
setIndex(
(prev) =>
(prev + 1) %
testimonials.length
)
}, 4000)

return () =>
clearInterval(interval)
}, [])

return (

<motion.section

initial="hidden"

whileInView="visible"

viewport={{
once: true,
amount: .25,
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

{/* BACKGROUND GLOW */}

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
max-w-5xl
mx-auto

relative
z-10
"
>

<motion.p
variants={item}
className="
text-[10px]
sm:text-[11px]
text-xs
tracking-[0.2em]

text-gray-400

mb-8
"
>

WHAT CLIENTS SAY

</motion.p>

<AnimatePresence mode="wait">

<motion.div

key={index}

variants={item}

initial={{
opacity: 0,
y: 40,
scale: .98,
}}

animate={{
opacity: 1,
y: 0,
scale: 1,
}}

exit={{
opacity: 0,
y: -20,
}}

transition={{
duration: .6,
}}

className="
relative

overflow-hidden

rounded-[28px]

border

border-white/10

bg-white/[0.03]

backdrop-blur-xl

p-8
md:p-12

flex

flex-col

md:flex-row

items-center

justify-between

gap-8

shadow-[0_0_80px_rgba(123,97,255,.08)]
"
>

{/* LIGHT */}

<div
className="
absolute

right-[-100px]
top-[-100px]

w-[250px]
h-[250px]

rounded-full

bg-purple-600/10

blur-[120px]
"
/>

{/* TEXT */}

<div
className="
relative
z-10

max-w-[620px]

            font-medium

            leading-[1.25]

             text-[2.2rem]
          sm:text-[1.6rem]
          md:text-[1.9rem]
          lg:text-[1.9rem]
"
>

<motion.p
initial={{
opacity: 0,
}}

animate={{
opacity: 1,
}}

className="
text-gray-300

text-lg
md:text-[22px]

leading-[1.8]
"
>

“{testimonials[index].text}”

</motion.p>

</div>

{/* USER */}

<motion.div

whileHover={{
scale: 1.04,
}}

className="
relative
z-10

flex

items-center

gap-4
"
>

<motion.img

animate={{
scale: [1, 1.03, 1],
}}

transition={{
duration: 3,
repeat: Infinity,
}}

src={
testimonials[index]
.image
}

alt=""

className="
w-16
h-16

rounded-full

object-cover

border

border-purple-500/40
"
/>

<div>

<p
className="
font-semibold

text-lg
"
>

{
testimonials[index]
.name
}

</p>

<p
className="
text-gray-400
"
>

{
testimonials[index]
.role
}

</p>

</div>

</motion.div>

</motion.div>

</AnimatePresence>

{/* DOTS */}

<motion.div

variants={item}

className="
flex

justify-center

mt-8

gap-3
"
>

{
testimonials.map(
(_, i) => (

<motion.button

key={i}

whileTap={{
scale: .85,
}}

onClick={() =>
setIndex(i)
}

className="
relative

h-[10px]

rounded-full

transition-all
"

animate={{
width:
i === index
? 34
: 10,
}}

>

<div
className={`
h-[10px]

rounded-full

${
i === index
? "bg-purple-500"
: "bg-gray-600"
}
`}
/>

</motion.button>

)
)
}

</motion.div>

</div>

</motion.section>

)
}