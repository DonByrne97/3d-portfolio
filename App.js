import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sky, Cloud, Text3D } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'; 
import roboto from './assets/Roboto_Bold.json'
import 'bootstrap/dist/css/bootstrap.min.css';


function Box({pos, color}) {
  return(
    <mesh position={pos}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={color} /> 
    </mesh>
  )
}

extend({ TextGeometry })

export default function App() {
  const font = new FontLoader().parse(roboto); 
  return(
    <Router>
      <NavigationBar />
        <Routes>
          <Route path="/About" element={<About />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/blog" element={<Blog />} /> 
        </Routes>
        <Canvas>
          <OrbitControls /> 
          <Box pos={[0, 0, 0]} color={"lightblue"}/> 
          <Box pos={[1, 1, 1]} color={"lightblue"}/> 
          <Box pos={[10, 5, 5]} color={"lightpink"} /> 
          <Box pos={[3, -5, 0]} color={"lightpink"} /> 
          <Box pos={[-9, -2, 1]} color={"lightblue"} /> 
          <Box pos={[-3, -4, 0]} color={"lightpink"} /> 
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <mesh position={[-7, -2, 0]}>
            <textGeometry args={['Brandon Byrne', {font, size: 1, height: 0.1}]} /> 
            <meshLambertMaterial attach='material' color={'lightblue'} /> 
          </mesh>
          <mesh position={[-7, -3, 0]}>
            <textGeometry args={['Click on the links above to open a card.', {font, size: 0.7, height: 0.}]} /> 
            <meshLambertMaterial attach='material' color={'pink'} /> 
          </mesh>
        </Canvas>
      </Router>
  )
}