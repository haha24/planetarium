class Vector3 {
    constructor(public x: number = 0, public y: number = 0, public z: number = 0) {

    }

    add(vec: Vector3): Vector3 {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    }

    sub(vec: Vector3): Vector3 {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    }

    scale(multiplier: number): Vector3 {
        this.x *= multiplier;
        this.y *= multiplier;
        this.z *= multiplier;
        return this;
    }

    normalize(): Vector3 {
        const length: number = this.length();
        this.x /= length;
        this.y /= length;
        this.z /= length;
        return this;
    }

    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    dot(vec: Vector3): number {
        return this.x * vec.x + this.y * vec.y + this.z + vec.z;
    }

    cross(vec: Vector3): Vector3 {
        return new Vector3(
            this.y * vec.z - vec.y * this.z,
            this.z * vec.x - vec.z * this.x,
            this.x * vec.y - this.y * vec.y
        );
    }

    negate(): Vector3 {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this;
    }

    static addStatic(vec1: Vector3, vec2: Vector3): Vector3 {
        return new Vector3(vec1.x + vec2.x, vec1.y + vec2.y, vec1.z + vec2.z);
    }

    static subStatic(vec1: Vector3, vec2: Vector3): Vector3 {
        return new Vector3(vec2.x - vec1.x, vec2.y - vec1.y, vec2.z - vec1.z);
    }

    static distanceStatic(vec1: Vector3, vec2: Vector3): number {
        return Math.sqrt((vec2.x - vec1.x) * (vec2.x - vec1.x) + (vec2.y - vec1.y) * (vec2.y - vec1.y) + (vec2.z - vec1.z) * (vec2.z - vec1.z));
    }

    static dotStatic(vec1: Vector3, vec2: Vector3): number {
        return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
    }

    static crossStatic(vec1: Vector3, vec2: Vector3): Vector3 {
        return new Vector3(
            vec1.y * vec2.z - vec2.y * vec1.z,
            vec1.z * vec2.x - vec2.z * vec1.x,
            vec1.x * vec2.y - vec1.y * vec2.y
        );
    }
}

export default Vector3;