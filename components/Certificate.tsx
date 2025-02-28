import { MovingBorderContainer } from "./ui/moving-border";

type CertificateProps = {
  title: string;
  provider: string;
  url: string;
};

const certificateArray: CertificateProps[] = [
  {
    provider: "Cisco",
    title: "Introduction to Cybersecurity",
    url: "https://www.credly.com/badges/a60e365e-5451-4911-b5d2-3360ae20a467",
  },
  {
    provider: "Cisco",
    title: "Data Analytics Essentials",
    url: "https://www.credly.com/badges/2808ea78-9836-4190-b130-42577c92a0e7",
  },
];

function Certificate() {
  return (
    <div className="w-full">
      <h2 className="text-center text-3xl text-white my-6 font-bold lg:text-left">
        Certifications
      </h2>
      <div className="flex flex-col gap-6 lg:flex-row">
        {certificateArray.map((item) => (
          <div className="lg:flex-1 lg:flex">
            <MovingBorderContainer
              duration={5000}
              className="w-full bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"
              containerClassName="w-full"
            >
              <div className="w-full rounded-3xl p-4 text-gray-50 flex flex-col gap-3">
                <h1 className="text-2xl font-semibold">{item.title}</h1>

                <p className="text-lg">Provided by : {item.provider}</p>
                <a
                  href={item.url}
                  target="_blank"
                  className="self-end bg-gradient-to-r from-[#3e4e6e] to-[#212e41] rounded-xl px-4 py-2 font-semibold text-xl my-2 active:scale-95 duration-200"
                >
                  View the certificate
                </a>
              </div>
            </MovingBorderContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
