import Image from "next/image";
import Link from "next/link";

export default function Inziblog2() {
  return (
    <>
      <div  className="blog">
        <Image width={500} height={500} alt="Picture of the author" />
        <div>
          <h2>
            {" "}
            What Is the Event Loop and How Does It Improve App Performance?
          </h2>
          <p>Inzamam Malik - August 15th, 2023</p>
        </div>

        <div>
          JavaScript is a single-threaded language, built to handle tasks one at
          a time. However, the event loop lets JavaScript handle events and
          callbacks asynchronously by emulating simultaneous programming
          systems. This assures the performance of your JavaScript
          applications.JavaScript is a single-threaded language, built to handle
          tasks one at a time. However, the event loop lets JavaScript handle
          events and callbacks asynchronously by emulating simultaneous
          programming systems. This assures the performance of your JavaScript
          applications.JavaScript is a single-threaded language, built to handle
          tasks one at a time. However, the event loop lets JavaScript handle
          events and callbacks asynchronously by emulating simultaneous
          programming systems. This assures the performance of your JavaScript
          applications.JavaScript is a single-threaded language, built to handle
          tasks one at a time. However, the event loop lets JavaScript handle
          events and callbacks asynchronously by emulating simultaneous
          programming systems. This assures the performance of your JavaScript
          applications.
          <br />
        </div>
      </div>
    </>
  );
}
