import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ExclamationTriangleIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/20/solid";
import WebApp from "../assets/web-app-1.png";

const Overview = () => {
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="overview"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-cyan-600">
                FoodLensAI
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Revolutionizing Nutritional Analysis and Label Intelligence
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The current approaches to dietary label analysis presents challenges that can be addressed by a smart, automated visual recognition system, optimizing regulatory compliance, health awareness, and market transparency.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Dam Control System"
            src={WebApp}
            className="w-48rem max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-cyan-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Intelligent Label Analysis.
                    </strong>
                    Processes food product labels and supplement facts panels in real-time, instantly extracting critical nutritional data securely.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-cyan-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Automated Compliance Engine.
                    </strong>
                    Evaluates ingredients and nutritional claims against regulatory standards, reducing human error in compliance checks.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-cyan-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Health Impact Profiling.
                    </strong>
                    Utilizes analyzed nutritional data to generate comprehensive health impact reports, empowering users to make informed dietary choices.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ExclamationTriangleIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-cyan-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Sustainability Scoring
                    </strong>
                    Analyzes product information and sourcing indicators to assess environmental impact and provide actionable sustainability metrics.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChartBarSquareIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-cyan-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Market Intelligence Generation.
                    </strong>
                    Extracts and aggregates valuable data trends from analyzed products, giving brands and researchers a competitive edge.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                The FoodLens AI system integrates computer vision, machine learning, and comprehensive nutritional databases, ensuring a more transparent and efficient analysis of dietary products.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Transforming Food Transparency.
              </h2>
              <p className="mt-6">
                Using this system, nutritional analysis can transition from slow and manual to instant and proactive, safeguarding consumers from hidden health risks and ensuring optimal market compliance for food and supplement brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
