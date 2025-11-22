import { State } from "@/app/store";
import { sub } from "@/constants/styles";
import { FC } from "react";
import { View, Text as _Text  } from "react-native";
import Svg, { Circle, Polygon, Text } from "react-native-svg";
import { useSelector } from "react-redux";

// a radar chart is a fancy and meaningful way of showing statistics and emphasizing higher values.
// you draw a polygon with as many edges as you have data points,
// with each edge going further away from the center as its value rises.
const SkillRadarChart: FC = () => {
  const skills = useSelector((state: State) => state.skills.skills);

  if (skills.length === 0) {
    return <_Text style={sub}>no datapoints.</_Text>;
  }

  // define some constants for the layout
  const size = 200;
  const center = size / 2;
  const radius = size * 0.4;

  let maxValue = 100;

  // compute the position where the edge of the polygon should go
  // the higher the value, the further the point should be from the center of the chart.
  // we use trigonometric functions as we want the points to be represented in a circular matter.
  const getPoint = (index: number, value: number) => {
    const angle = (index / skills.length) * 2 * Math.PI - Math.PI / 2;
    const distance = (value / maxValue) * radius;
    return {
      x: center + distance * Math.cos(angle),
      y: center + distance * Math.sin(angle),
    };
  };

  const points = skills.map((skill, index) => {
      // additionally compute the max value in the chart to avoid another pass in the array
      maxValue = Math.max(maxValue, skill.xp);
      return getPoint(index, skill.xp);
    }
  );

  // map the points to readable coordinates for the <Polygon /> component
  const polygonPoints = points.map(point => `${point.x},${point.y}`).join(' ');

  return (
    <View style={{ alignItems: 'center', padding: 20 }}>

      <Svg height={size} width={size}>
        {/* for chart depth, add some concentric polygons (scale 1 polygon is bordering the chart) */}
        {[0.25, 0.5, 0.75, 1].map((scale, i) => (
          <Polygon
            key={i}
            points={skills.map((_skill, index) => {
              const point = getPoint(index, maxValue * scale);
              return `${point.x},${point.y}`;
            }).join(' ')}
            fill="none"
            stroke="#FFE8D3"
            strokeWidth="0.5"
          />
        ))}
        
        {/* Data radar shape */}
        <Polygon
          points={polygonPoints}
          fill="lime"
          fillOpacity="0.8"
          stroke="lime"
          strokeWidth="2"
        />
        
        {/* Data points */}
        {points.map((point, index) => (
          <Circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="lime"
          />
        ))}
        
        {/* Labels */}
        {skills.map((skill, index) => {
          const point = getPoint(index, maxValue * 1.1);
          return (
            <Text
              key={index}
              x={point.x}
              y={point.y}
              fontSize="10"
              textAnchor="middle"
              fill="#433D3A">
              {skill.name}
            </Text>
          );
        })}
      </Svg>

    </View>
  );
};

export default SkillRadarChart;