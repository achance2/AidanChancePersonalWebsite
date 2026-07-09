import Image from "next/image";

export default function MobileAboutCollage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-10 px-6 py-12 md:hidden">
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

        <div className="relative mt-6 rounded-3xl bg-[#fffdf2] p-6 shadow-2xl">
          <div className="absolute -top-4 left-12 h-8 w-8 rotate-45 bg-[#fffdf2]" />

          <p className="relative z-10 text-base leading-7 text-[#24535a]/80">
            I started bouldering during my 2024 study abroad trip in Seoul,
            South Korea. Since then, it has become a way for me to challenge
            myself both physically and mentally. This video shows me sending one
            of the projects I had been working on.
          </p>
        </div>
      </div>

      <Image
        src="/images/home_images/gladash.JPG"
        alt="Gladash"
        width={550}
        height={550}
        className="w-full rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
      />

      <Image
        src="/images/home_images/volleyball.JPG"
        alt="Volleyball"
        width={550}
        height={550}
        className="w-full rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
      />

      <Image
        src="/images/home_images/convention.JPG"
        alt="Convention"
        width={550}
        height={550}
        className="w-full rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
      />

      <Image
        src="/images/home_images/graduation.jpg"
        alt="Graduation"
        width={450}
        height={450}
        className="w-full rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
      />

      <video
        src="/videos/pie.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full rounded-3xl border-2 border-white/80 bg-black object-cover shadow-2xl"
      />
    </div>
  );
}