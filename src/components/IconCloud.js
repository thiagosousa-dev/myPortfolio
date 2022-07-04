import React from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";

const useIcons = (slugs) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, slugs);

  return React.useMemo(() => {
    if (!data) {
      return <a href="foo">Loading</a>;
    }

    return Object.values(data.simpleIcons).map((icon) => {
      return renderSimpleIcon({
        icon,
        minContrastRatio: 2,
        bgHex: "#24292e",
        fallbackHex: "#e1e1e6",
        size: 45,
        aProps: {
          onClick: (e) => {
            e.preventDefault();
          },
        },
      })
    });
  }, [data])
};

const tagCanvasOptions = {
  clickToFront: 500,
  depth: 1,
  imageScale: 2,
  initial: [0.1, -0.1],
  outlineColour: '#0000',
  reverse: true,
  tooltip: 'native',
  tooltipDelay: 0,
  wheelZoom: false,
}
const iconSlugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "redux",
  "mysql",
];

const Componente = () => {
  const icons = useIcons(iconSlugs);
  return (
    <div className="iconCloud-container">
      <Cloud options={tagCanvasOptions}>
        {icons}
      </Cloud>
    </div>
  );
};

export default Componente;
