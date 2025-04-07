import React from "react";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ img, title, month, year, content, link, isWithAI }) => {
  const { t } = useTranslation();

  return (
    <div className="project">
      {isWithAI && (
        <div className="project-ai">
          <span className="ai">{t("global.ai")}</span>
        </div>
      )}
      <img src={`${img}`} alt={title}></img>
      <div className="project-body">
        <div className="project-body__date">
          <span className="date">
            {month} {year}
          </span>
        </div>
        <div className="project-body__title">
          <h3>{title}</h3>
        </div>
        <div className="project-body__text">
          <p>{content}</p>
        </div>
        {link ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="btn btn-primary"
          >
            {t("global.v1s1t")}
          </a>
        ) : (
          <span className="btn btn-disabled">{t("global.notAvailable")}</span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
