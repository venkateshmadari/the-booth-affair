import { AnimatedText } from "../Animations/AnimatedText";
import { TextFade } from "../Animations/TextFade";

const AboutUs = () => {
  return (
    <div className="min-h-screen p-8 mt-32">
      <AnimatedText text="about us" className="gradient-text" />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <AnimatedText
              text="Born from nostalgia. Built for today."
              className="text-primary font-Cormorant capitalize md:text-3xl text-2xl md:pt-0 pt-3 font-semibold"
            />
            <TextFade direction="down">
              <p className="font-Inter py-4 md:text-lg text-subheading">
                The
                <span className="font-medium italic mx-1">Booth Affair</span>
                began as a dream in a college dorm - a vision sparked by a love
                for European culture, vintage drama, and the timeless romance of
                old-world elegance. While everyone else picked up cameras, we
                chose something different. We didn’t want to chase photography.
                We wanted to create a moment - one that felt like stepping into
                a film still, a memory frozen in velvet and light.
              </p>
            </TextFade>
          </div>

          {/* Image overlap section */}
          <div className="relative h-96">
            {/* Base image */}
            <div className="absolute top-10 left-0 md:w-3/5 w-4/5 h-3/5 z-10">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Artwork 1"
                className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-third"
              />
            </div>

            {/* Overlapping image */}
            <div className="absolute bottom-0 md:right-[25%] right-[1%] md:top-[20%] top-[30%] md:w-3/5 w-4/5 h-3/5 z-20">
              <img
                src="https://i.pinimg.com/736x/a8/78/29/a878293ece04f95ead938d3f371eb705.jpg"
                alt="Artwork 2"
                className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-third"
              />
            </div>
          </div>
        </div>
        <TextFade direction="down">
          <p className="font-Inter  md:text-lg text-subheading">
            It was during those years that the charm of vintage photo booths
            caught our eye — the kind found in tucked-away corners of European
            cities, where lovers would steal a kiss and friends would share a
            laugh. There was something raw and real about them. Not posed. Not
            filtered. Just… honest. That’s when the idea took hold — to bring
            this rare, romantic experience to India, and give people something
            they hadn’t felt before.
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter py-8 md:text-lg text-subheading">
            Our vision was to design a space that feels timeless — retro in
            soul, elegant in style, and modern in experience. With a deep red
            velvet and black backdrop, every frame becomes more than just a
            photo — it becomes a scene. Dramatic, cinematic, intimate. And with
            our cutting-edge tech behind the lens, what you get is not just
            clarity — it’s character. Sepia tones and soulful shadows that wrap
            around you, capturing not just how you looked, but how it felt to be
            there.
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter  md:text-lg text-subheading">
            At The Booth Affair, every detail is intentional. Every image is a
            keepsake. A soft whisper of the past, preserved with today’s
            precision.It’s more than a booth. It’s a moment to flirt, to laugh,
            to feel something real — and to take a little piece of it home with
            you.
          </p>
        </TextFade>
        <div className="bg-primary py-4 w-full my-7 rounded-2xl">
          <TextFade direction="down">
            <p className="font-Cormorant pt-7 pb-1 text-center text-secondary font-semibold text-4xl italic">
              Flash. Flirt. Repeat.
            </p>
          </TextFade>
          <TextFade direction="down">
            <p className="font-Inter pb-8 text-center  md:text-base text-xs text-secondary">
              That’s not just our tagline — it’s our philosophy.
            </p>
          </TextFade>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
