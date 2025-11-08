// components/About.tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePhoto from "@/public/profilePhoto.png";

export  function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="justify-self-center lg:justify-self-start">
          <Avatar className="size-28 sm:size-36 lg:size-50 xl:size-60">
            <AvatarImage
              src={profilePhoto.src}
              alt="Matthew portrait"
              className="object-cover"
            />
            <AvatarFallback>MT</AvatarFallback>
          </Avatar>
        </div>

        {/* 右侧：文本（小屏在下） */}
        <div className="text-center lg:text-left">
          <p className="text-base sm:text-lg opacity-80">
            Hi, I&apos;m Matthew. I&apos;m a full-stack engineer and an intern at{" "}
            <b>CiiLOCK Engineering</b>. I&apos;m an ANU <b>Master of Computing</b>{" "}
            alum (I still miss Canberra!). I specialise in <b>React</b> and{" "}
            <b>Next.js</b> with <b>TypeScript</b>, and I build APIs with Next.js,
            Flask, and a bit of Spring Boot. I like taking end-to-end ownership,
            working with DevOps to ship with <b>Docker</b> and <b>AWS</b>, and I
            care about clear UX, strong performance, and maintainable code. I&apos;m
            open to opportunities—happy to chat.
          </p>
        </div>
      </div>
    </section>
  );
}

