import React, { Component } from 'react';
import { lerp } from 'canvas-sketch-util/math';
import random from 'canvas-sketch-util/random';
import palettes from 'nice-color-palettes';

class Canvas extends Component {
  state = {
    background: '#000',
    character: '#&~',
    count: 5,
    size: 5,
    palette: random.shuffle(random.pick(palettes)),
    points: [],
  };

  // The canvas is drawn when the component is mounted.
  componentDidMount() {
    this.changePattern();
    this.drawCanvas();
  }

  // The canvas is drawn when the component updates.
  componentDidUpdate() {
    this.drawCanvas();
  }

  createGrid = () => {
    const points = [];
    const count = this.state.count;

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        const radius = Math.abs(random.noise2D(u, v)) * this.state.size;

        points.push({
          color: random.pick(this.state.palette),
          radius,
          rotation: random.noise2D(u, v),
          position: [u, v],
        });
      }
    }

    return points;
  };

  drawCanvas() {
    const context = this.myCanvas.getContext('2d');
    const width = this.myCanvas.width;
    const height = this.myCanvas.height;
    const points = this.state.points;
    const margin = 0;

    context.fillStyle = this.state.background;
    context.fillRect(0, 0, width, height);

    points.forEach(({ color, position, radius, rotation }) => {
      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);
      const characters = this.state.character.split('');

      context.save();
      context.fillStyle = color;
      context.font = `${radius * width}px "Helvetica"`;
      context.translate(x, y);
      context.rotate(rotation);
      context.fillText(characters[Math.floor(Math.random() * characters.length)], 0, 0);

      context.restore();
    });
  }

  changePattern = () => {
    this.setState({
      points: this.createGrid().filter(() => random.value() > 0.5),
    });
  };

  changeColor = () => {
    this.setState(
      {
        palette: random.shuffle(random.pick(palettes)),
      },
      () => {
        this.changePattern();
      },
    );
  };

  setBackground = e => {
    this.setState({
      background: e.target.value,
    });
  };

  setCharacter = e => {
    this.setState({
      character: e.target.value,
    });
  };

  setCount = e => {
    this.setState({ count: e.target.value }, () => {
      this.changePattern();
    });
  };

  setSize = e => {
    this.setState({ size: e.target.value }, () => {
      this.changePattern();
    });
  };

  render() {
    return (
      <>
        <aside id="form">
          <legend className="form-group">
            <label>Background </label>
            <input
              type="text"
              value={this.state.background}
              onChange={this.setBackground}
            />
          </legend>
          <legend className="form-group">
            <label>Character </label>
            <input
              type="text"
              value={this.state.character}
              onChange={this.setCharacter}
            />
          </legend>
          <legend className="form-group">
            <label>Grid count</label>
            <input
              type="number"
              value={this.state.count}
              onChange={this.setCount}
            />
          </legend>
          <legend className="form-group">
            <label>Size</label>
            <input
              type="number"
              value={this.state.size}
              onChange={this.setSize}
            />
          </legend>
          <legend className="form-group">
            <button onClick={this.changeColor}>Change color!</button>
          </legend>
        </aside>
        <section id="creative">
          <canvas
            ref={canvas => (this.myCanvas = canvas)}
            height={768}
            width={1024}
          />
        </section>
      </>
    );
  }
}

export default Canvas;
