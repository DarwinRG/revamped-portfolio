import { MovingBorderContainer } from "./ui/moving-border";

type CertificateProps = {
  title: string;
  provider: string;
  url: string;
};

const certificateArray: CertificateProps[] = [
  {
    provider: "Cisco",
    title: "Cybersecurity",
    url: "/Cybersecurity - Cisco.pdf",
  },
  {
    provider: "Cisco",
    title: "Data Analytics",
    url: "/Data Analytics - Cisco.pdf",
  },
  {
    provider: "Cisco",
    title: "IT Customer Support",
    url: "/IT Customer Support - Cisco.pdf",
  },
  {
    provider: "Cisco",
    title: "Networking Essentials",
    url: "/Networking Essentials - Cisco.pdf",
  },
  {
    provider: "Cisco",
    title: "JavaScript Essentials 1",
    url: "/Javascript Essentials 1 - Cisco.pdf",
  },
  {
    provider: "Microsoft",
    title: "Word Associate Microsoft 365 Apps",
    url: "/Word Associate Microsoft 365 Apps - Microsoft.pdf",
  },
];

function Certificate() {
  return (
    <div className="w-full">
      <h2 className="text-center text-3xl text-white my-6 font-bold lg:text-left">
        Certifications
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {certificateArray.map((item) => (
          <div className="lg:flex-1 lg:flex" key={item.title}>
            <MovingBorderContainer
              duration={5000}
              className="w-full bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] h-full"
              containerClassName="w-full h-full"
            >
              <div className="w-full rounded-3xl p-4 text-gray-50 flex flex-col gap-3 h-full max-h-52">
                <h1 className="text-2xl font-semibold line-clamp-2">{item.title}</h1>
                <p className="text-lg">Provided by : {item.provider}</p>
                <a
                  href={item.url}
                  target="_blank"
                  className="self-end bg-gradient-to-r from-[#3e4e6e] to-[#212e41] rounded-xl px-4 py-2 font-semibold text-xl my-2 active:scale-95 duration-200 mt-auto"
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
