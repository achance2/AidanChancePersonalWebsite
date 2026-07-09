import Image from "next/image";

export default function MobileAboutCollage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-12 px-6 py-12 md:hidden">
      <div>
        <video
          src="/videos/bouldering.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full rounded-3xl border-2 border-white/80 bg-black object-cover shadow-2xl"
        />

        <div className="relative mt-6 rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
          <div className="absolute -top-3 left-12 h-7 w-7 rotate-45 bg-[#fffdf2]" />

          <p className="relative z-10 text-base leading-7 text-[#24535a]/80">
            I started bouldering during my 2024 study abroad trip in Seoul,
            South Korea. Since then, it has become a way for me to challenge
            myself both physically and mentally. This video shows me sending a
            project I've been recently working on.
          </p>
        </div>
      </div>

      <div>
        <Image
          src="/images/home_images/gladash.JPG"
          alt="Gladiator Dash"
          width={550}
          height={550}
          className="w-full rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
        />

        <div className="relative mt-6 rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
          <div className="absolute -top-3 left-12 h-7 w-7 rotate-45 bg-[#fffdf2]" />

          <p className="relative z-10 text-base leading-7 text-[#24535a]/80">
            I ran the 2026 Spring Gladiator Dash hosted in Bryan, Texas with my
            friends. The Gladiator Dash is a 5K that involves overcoming
            obstacles and swimming. It was fun working together with my friends
            to complete it. We all got covered in mud!
          </p>
        </div>
      </div>

      <div>
        <Image
          src="/images/home_images/volleyball.JPG"
          alt="Volleyball"
          width={550}
          height={550}
          className="w-full rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
        />

        <div className="relative mt-6 rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
          <div className="absolute -top-3 left-12 h-7 w-7 rotate-45 bg-[#fffdf2]" />

          <p className="relative z-10 text-base leading-7 text-[#24535a]/80">
            This is a picture of me and my friends from the Society of Asian
            Scientists and Engineers playing intramural volleyball. We had a lot
            of fun playing and working together. We did lose this game, but we
            still had a great time!
          </p>
        </div>
      </div>

      <div>
        <Image
          src="/images/home_images/graduation.jpg"
          alt="Graduation"
          width={450}
          height={450}
          className="w-full rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
        />

        <div className="relative mt-6 rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
          <div className="absolute -top-3 left-12 h-7 w-7 rotate-45 bg-[#fffdf2]" />

          <p className="relative z-10 text-base leading-7 text-[#24535a]/80">
            In May 2026, my friend Nick graduated from Texas A&M University
            with a degree in Computer Science. We celebrated his graduation
            together and cheered him on as he walked across the stage. I wish
            him the best of luck, and I know he will do great things!
          </p>
        </div>
      </div>

      <div>
        <Image
          src="/images/home_images/convention.JPG"
          alt="SASE Convention"
          width={550}
          height={550}
          className="w-full rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
        />

        <div className="relative mt-6 rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
          <div className="absolute -top-3 left-12 h-7 w-7 rotate-45 bg-[#fffdf2]" />

          <p className="relative z-10 text-base leading-7 text-[#24535a]/80">
            In Fall 2026, the SASE officers got the opportunity to attend the
            SASE National Conference in Pittsburgh, Pennsylvania. We had a blast
            exploring the city and attending the conference with other SASE
            chapters. During the award ceremony, our chapter won honorable
            mention for best overall SASE chapter!
          </p>
        </div>
      </div>

      <div>
        <video
          src="/videos/pie.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full rounded-3xl border-2 border-white/80 bg-black object-cover shadow-2xl"
        />

        <div className="relative mt-6 rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
          <div className="absolute -top-3 left-12 h-7 w-7 rotate-45 bg-[#fffdf2]" />

          <p className="relative z-10 text-base leading-7 text-[#24535a]/80">
            In Spring 2026, SASE officers got pied in the face by other members
            to raise money for Scotty's House, a local charity that helps
            children affected by abuse. This is a video of me getting pied!
          </p>
        </div>
      </div>
    </div>
  );
}