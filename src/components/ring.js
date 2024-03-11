import Ecliptic from '../components/ecliptic';
import Planet from '../components/planet';

function Ring({ config, dirView, parent }) {
  return (
    <group>
      <Ecliptic
        xRadius={config.eliptic.xRadius}
        zRadius={config.eliptic.zRadius}
        selected={true}
      />
      {config.planets.map((planet, index) => (
        <Planet
          key={index}
          planet={planet}
          dirView={dirView} />
      ))}
    </group>)
}

export default Ring;