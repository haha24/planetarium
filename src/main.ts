import { initializeGLContext } from './webgl-utils';
import ShaderProgram from './shader-program';
import { fragmentShaderSource, vertexShaderSource } from './shader-source';

window.onload = () => {
    const gl: WebGL2RenderingContext = initializeGLContext('canvas');
    if (!gl) {
        console.log('Failed to initialize WebGL2');
        return;
    }
    else {
        console.log('Webgl successfully initialized');
    }

    const shader: ShaderProgram = new ShaderProgram(gl, vertexShaderSource, fragmentShaderSource);
    const positionAttribLocation = shader.getAttributeLocation(gl, 'a_position');

    const positionBuffer: WebGLBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions: number[] = [
        0, 0,
        0, 0.5,
        0.7, 0
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const vao: WebGLVertexArrayObject = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.enableVertexAttribArray(positionAttribLocation);

    const size = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;

    gl.vertexAttribPointer(positionAttribLocation, size, type, normalize, stride, offset);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    shader.bind(gl);

    gl.bindVertexArray(vao);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
}