export const initializeGLContext = (canvasId: string) : WebGL2RenderingContext => {
    const canvas: HTMLCanvasElement = document.querySelector(`#${canvasId}`);
    const gl: WebGL2RenderingContext = canvas.getContext('webgl2');
    if (!gl) {
        return null;
    }
    else {
        return gl;
    }
}