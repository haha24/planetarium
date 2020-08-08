import Vector3 from './vector3';

class Mat4 {
    values: number[];

    static readonly m11 = 0;
    static readonly m12 = 1;
    static readonly m13 = 2;
    static readonly m14 = 3;
    
    static readonly m21 = 4;
    static readonly m22 = 5;
    static readonly m23 = 6;
    static readonly m24 = 7;

    static readonly m31 = 8;
    static readonly m32 = 9;
    static readonly m33 = 10;
    static readonly m34 = 11;

    static readonly m41 = 12;
    static readonly m42 = 13;
    static readonly m43 = 14;
    static readonly m44 = 15;

    constructor() {
        this.values = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]
    }

    multiply(mat: Mat4): Mat4 {
        const temp: number[] = new Array(16);
        const v1 = this.values;
        const v2 = mat.values;
        
        temp[Mat4.m11] = v1[Mat4.m11] * v2[Mat4.m11] + v1[Mat4.m12] * v2[Mat4.m21] + v1[Mat4.m13] * v2[Mat4.m31] + v1[Mat4.m14] * v2[Mat4.m41];
        temp[Mat4.m12] = v1[Mat4.m11] * v2[Mat4.m12] + v1[Mat4.m12] * v2[Mat4.m22] + v1[Mat4.m13] * v2[Mat4.m32] + v1[Mat4.m14] * v2[Mat4.m42];
        temp[Mat4.m13] = v1[Mat4.m11] * v2[Mat4.m13] + v1[Mat4.m12] * v2[Mat4.m23] + v1[Mat4.m13] * v2[Mat4.m33] + v1[Mat4.m14] * v2[Mat4.m43];
        temp[Mat4.m14] = v1[Mat4.m11] * v2[Mat4.m14] + v1[Mat4.m12] * v2[Mat4.m24] + v1[Mat4.m13] * v2[Mat4.m34] + v1[Mat4.m14] * v2[Mat4.m44];

        temp[Mat4.m21] = v1[Mat4.m21] * v2[Mat4.m11] + v1[Mat4.m22] * v2[Mat4.m21] + v1[Mat4.m23] * v2[Mat4.m31] + v1[Mat4.m24] * v2[Mat4.m41];
        temp[Mat4.m22] = v1[Mat4.m21] * v2[Mat4.m12] + v1[Mat4.m22] * v2[Mat4.m22] + v1[Mat4.m23] * v2[Mat4.m32] + v1[Mat4.m24] * v2[Mat4.m42];
        temp[Mat4.m23] = v1[Mat4.m21] * v2[Mat4.m13] + v1[Mat4.m22] * v2[Mat4.m23] + v1[Mat4.m23] * v2[Mat4.m33] + v1[Mat4.m24] * v2[Mat4.m43];
        temp[Mat4.m24] = v1[Mat4.m21] * v2[Mat4.m14] + v1[Mat4.m22] * v2[Mat4.m24] + v1[Mat4.m23] * v2[Mat4.m34] + v1[Mat4.m24] * v2[Mat4.m44];

        temp[Mat4.m31] = v1[Mat4.m11] * v2[Mat4.m11] + v1[Mat4.m32] * v2[Mat4.m21] + v1[Mat4.m33] * v2[Mat4.m31] + v1[Mat4.m34] * v2[Mat4.m41];
        temp[Mat4.m32] = v1[Mat4.m11] * v2[Mat4.m12] + v1[Mat4.m32] * v2[Mat4.m22] + v1[Mat4.m33] * v2[Mat4.m32] + v1[Mat4.m34] * v2[Mat4.m42];
        temp[Mat4.m33] = v1[Mat4.m11] * v2[Mat4.m13] + v1[Mat4.m32] * v2[Mat4.m23] + v1[Mat4.m33] * v2[Mat4.m33] + v1[Mat4.m34] * v2[Mat4.m43];
        temp[Mat4.m34] = v1[Mat4.m11] * v2[Mat4.m14] + v1[Mat4.m32] * v2[Mat4.m24] + v1[Mat4.m33] * v2[Mat4.m34] + v1[Mat4.m34] * v2[Mat4.m44];

        temp[Mat4.m41] = v1[Mat4.m41] * v2[Mat4.m11] + v1[Mat4.m42] * v2[Mat4.m21] + v1[Mat4.m43] * v2[Mat4.m31] + v1[Mat4.m44] * v2[Mat4.m41];
        temp[Mat4.m42] = v1[Mat4.m41] * v2[Mat4.m12] + v1[Mat4.m42] * v2[Mat4.m22] + v1[Mat4.m43] * v2[Mat4.m32] + v1[Mat4.m44] * v2[Mat4.m42];
        temp[Mat4.m43] = v1[Mat4.m41] * v2[Mat4.m13] + v1[Mat4.m42] * v2[Mat4.m23] + v1[Mat4.m43] * v2[Mat4.m33] + v1[Mat4.m44] * v2[Mat4.m43];
        temp[Mat4.m44] = v1[Mat4.m41] * v2[Mat4.m14] + v1[Mat4.m42] * v2[Mat4.m24] + v1[Mat4.m43] * v2[Mat4.m34] + v1[Mat4.m44] * v2[Mat4.m44];

        this.values = temp;
        return this;
    }

    translate(vec: Vector3) {
        this.values[Mat4.m41] = vec.x;
        this.values[Mat4.m42] = vec.y;
        this.values[Mat4.m43] = vec.z;
    }

    setTranslation(vec: Vector3) {
        this.values[Mat4.m41] = vec.x;
        this.values[Mat4.m42] = vec.y;
        this.values[Mat4.m43] = vec.z;
    }

    setScale(vec: Vector3) {
        this.values[Mat4.m11] = vec.x;
        this.values[Mat4.m22] = vec.y;
        this.values[Mat4.m33] = vec.z;
    }
}

export default Mat4;