import Image from "next/image";
import Link from "next/link";

export default function Inziblog() {
  return (
    <>
      <div  className="blog">
        <Image width={500} height={500} alt="Picture of the author" />
        <div>
          <h2> An Action Button Could Be Coming to the iPhone 15</h2>
          <p>Inzamam Malik - August 15th, 2023</p>
        </div>

        <div>
          Apple could be putting an Action button on your next iPhone. According
          to a July report from MacRumors, code in the fourth iOS 17 developer
          beta hints at functionality for an Action button on the next-gen
          iPhone 15 Pro and Pro Max models. Apple introduced the Action button
          on the Apple Watch Ultra. It's a physical button on the side of the
          Apple Watch Ultra that allows you to run a preselected function or
          program when you press it without unlocking your device or navigating
          to an app. Some of the preselected functions include starting a
          stopwatch, beginning a workout and turning on your flashlight.
          <br />
        </div>
      </div>
    </>
  );
}
