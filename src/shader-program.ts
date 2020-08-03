class ShaderProgram {
    programId: WebGLProgram;
    vsId: WebGLShader;
    fsId: WebGLShader;

    constructor(gl: WebGL2RenderingContext, vsh: string, fsh: string) {
        this.programId = gl.createProgram();
        this.vsId = this.createShader(gl, gl.VERTEX_SHADER, vsh);
        this.fsId = this.createShader(gl, gl.FRAGMENT_SHADER, fsh);

        gl.attachShader(this.programId, this.vsId);
        gl.attachShader(this.programId, this.fsId);
        gl.linkProgram(this.programId);
        const success = gl.getProgramParameter(this.programId, gl.LINK_STATUS);

        if (!success) {
            console.log('Failed to link program');
            console.log(gl.getProgramInfoLog(this.programId));
        }
    }

    getAttributeLocation(gl: WebGL2RenderingContext, name: string): number {
        return gl.getAttribLocation(this.programId, name);
    }
    
    bind(gl: WebGL2RenderingContext): void {
        gl.useProgram(this.programId);
    }

    createShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader {
        const shader: WebGLShader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
            return shader;
        }
        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        throw new Error('Failed to compile shader');
    }
}

export default ShaderProgram;