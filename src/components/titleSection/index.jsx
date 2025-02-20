const TitleSection = ({ titleSectionData, sectionClasses, headingClasses, white }) => {
  return (
    <>
      <div className={`section-title-area ${sectionClasses}`}>
        <h6
          className={`section-subtitle ${headingClasses} `} style={ white ?  { color: "whitesmoke" } : null }
        >
          {titleSectionData.subTitle}
        </h6>
        <h1 className="section-title" style={ white ? { color: "whitesmoke" } : null } >  {titleSectionData.title}</h1>
      </div>
    </>
  );
};

export default TitleSection;
