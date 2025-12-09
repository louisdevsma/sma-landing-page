"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Working with this team was a game-changer. Their expertise and dedication to our project were outstanding. The final product exceeded all our expectations!",
    name: "Jane Doe",
    role: "CEO, Innovate Inc.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6PmJREjebBuaAVjfN0xWL2bxabr8xHBle7e1uHhXp8xxrvBJgVmxHYLBwMysoFUG2EjLLUOXriRnT9B8mhL8-dbXBIatcsU2HvnvqWXIRk07N90N46EAAf6x63xn2L4Kjt34DqGFQLO7jZvMqXT7DGSWuGobZwekdaL0tEc6t3QDQ9DVdDdEavur62HBkr8mUnlmE4cnTt-Q98Su-FScxnjIo_4M_ZNUsOKK3mi8OisxqA03AiWA9n8_ekCk4bycRXysxz_ejYcg",
    imageAlt: "Portrait of Jane Doe",
  },
  {
    id: 2,
    quote:
      "The level of professionalism and communication was top-notch. They understood our vision perfectly and delivered a solution that was both beautiful and highly functional.",
    name: "John Smith",
    role: "CTO, Tech Solutions",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDexRTsPFwMc3uv0F2lTl8TgTzz2o0zvnPzi8wlxMZANqXPY2qxwnEUydBtPSz_AQwemlOxP4HYQYD2fl7IIA717q_pWynzYkXZ_t4ICzluMC92ZT-wCMANtEoqGeJoDOsJP6SO11cj9SBrRj-2KviiwkHIuZa1kopqzYGtwx3PrZDzBbCMrjeKTkIHykksJHPYgbKAwltZTUVe05UgJIaLqCdo8AHr4D7vf4IBfGwZD_q76n8094JLXSz4OKvoueMlMrG7b9s1UpVY",
    imageAlt: "Portrait of John Smith",
  },
  {
    id: 3,
    quote:
      "Their agile process made the entire development cycle smooth and efficient. We were always in the loop and felt like a true partner throughout the project.",
    name: "Emily White",
    role: "Marketing Director, Creative Co.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKRZ6i2yAq90igpgSM-AJzU9Hlj4NBUoUs8z1mp8otyxBrM54h9XhdCHxICi2xl33ScQvrxhP9kGOGca1PA2-pyLbHmaQGMgCaRB2u-nNYrqrkv7h25BqAkX_dpKi3DFe-vvw4iAxTCu384YKZf5Iz7goQMCakvGgnBpiFH2ffEja1rwc4bA06C6gnsvLgHsfeuiArWGG9Bf-YlIyevZngZQ-vmFs9PNqLHt_q0hU6mYIEHzHPgapA1R-Q8beU4b-vLtY7VLBd5H0X",
    imageAlt: "Portrait of Emily White",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const OurClientSay = () => {
  return (
    <motion.section
      className="py-16 md:py-24 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="sma-container">
        <motion.div
          className="flex flex-col items-center gap-4 text-center max-w-3xl mx-auto mb-12"
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.033em] text-white md:text-4xl">
            What Our Clients Say
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="flex flex-col gap-4 rounded-xl border border-[#1A1A2E] bg-[#1A1A2E] p-6"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="text-base font-normal leading-normal text-[#E0E0E0]">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                <motion.div
                  className="h-10 w-10 rounded-full relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    alt={testimonial.imageAlt}
                    className="object-cover"
                    data-alt={testimonial.imageAlt}
                    src={testimonial.image}
                    fill
                    placeholder="blur"
                    blurDataURL={testimonial.image}
                    loading="lazy"
                  />
                </motion.div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-[#A0A0A0]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
