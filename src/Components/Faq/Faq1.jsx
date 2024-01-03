

const FeatureSection = ({ title, imageUrl }) => (
  <div className="items-center bg-zinc-100 flex justify-between gap-0 mt-3 px-4 py-3 rounded-md max-md:max-w-full max-md:flex-wrap">
    <div className="text-black text-base font-medium leading-6 grow my-auto max-md:max-w-full">
      {title}
    </div>
    <img
      loading="lazy"
      src={imageUrl}
      alt="Feature"
      className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
    />
  </div>
);

const ContentSection = ({ features }) => (
  <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
    {features.map((feature, index) => (
      <FeatureSection key={index} {...feature} />
    ))}
  </div>
);

const ImageSection = ({ imageUrl }) => (
  <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
    <img
      loading="lazy"
      srcSet={imageUrl}
      className="aspect-[0.92] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
      alt="Main Image"
    />
  </div>
);

function Faqs(props) {
  const featuresData = [
    {
      title: "Etiam lobortis massa eu nibh tempor elementum.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39e85927f3169f3699d377ede3aae6cc3a0e3feca2c26f931a101c5bcb76525f?apiKey=c795402f61f84f4faf36834d5e8f01a8&",
    },
    {
      title: "In elementum est a ante sodales iaculis.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39e85927f3169f3699d377ede3aae6cc3a0e3feca2c26f931a101c5bcb76525f?apiKey=c795402f61f84f4faf36834d5e8f01a8&",
    },
    {
      title: "Aenean quis quam nec lacus semper dignissim.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39e85927f3169f3699d377ede3aae6cc3a0e3feca2c26f931a101c5bcb76525f?apiKey=c795402f61f84f4faf36834d5e8f01a8&",
    },
    {
      title: "Nulla tincidunt eros id tempus accumsan.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39e85927f3169f3699d377ede3aae6cc3a0e3feca2c26f931a101c5bcb76525f?apiKey=c795402f61f84f4faf36834d5e8f01a8&",
    },
  ];

  const imageData =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6dd8178a8ec1d2d8dfbbe3a17f81dbcc6c8bdfa541bf76c8e06593d1eea34444?apiKey=c795402f61f84f4faf36834d5e8f01a8&";

  return (
    <div className="self-center w-full max-w-[1462px] mt-20 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <ContentSection features={featuresData} />
        <ImageSection imageUrl={imageData} />
      </div>
    </div>
  );
}

export default Faqs;

