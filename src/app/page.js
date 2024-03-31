import Image from 'next/image';
import TaskManage from "@/assets/Image/TaskMange.jpg"

export default function Home() {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={TaskManage}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
