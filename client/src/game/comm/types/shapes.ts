export interface ServerShape {
    uuid: string;
    type_: string;
    x: number;
    y: number;
    floor: string;
    layer: string;
    movement_obstruction: boolean;
    vision_obstruction: boolean;
    draw_operator: string;
    trackers: Tracker[];
    auras: ServerAura[];
    labels: Label[];
    owners: string[];
    fill_colour: string;
    stroke_colour: string;
    name: string;
    name_visible: boolean;
    annotation: string;
    is_token: boolean;
    options?: string;
    badge?: number;
}

export interface ServerRect extends ServerShape {
    width: number;
    height: number;
}

export interface ServerCircle extends ServerShape {
    radius: number;
}

export interface ServerCircularToken extends ServerCircle {
    text: string;
    font: string;
}

export interface ServerLine extends ServerShape {
    x2: number;
    y2: number;
    line_width: number;
}
export interface ServerPolygon extends ServerShape {
    vertices: { x: number; y: number }[];
    open_polygon: boolean;
    line_width: number;
}
export interface ServerText extends ServerShape {
    text: string;
    font: string;
    angle: number;
}
export interface ServerAsset extends ServerRect {
    src: string;
}

export interface ServerAura {
    uuid: string;
    vision_source: boolean;
    visible: boolean;
    name: string;
    value: number;
    dim: number;
    colour: string;
}
