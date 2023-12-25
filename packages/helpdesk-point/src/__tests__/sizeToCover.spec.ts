import { sizeToCover } from '../sizeToCover';

describe('utils/point/sizeToCover', () => {
  test('sizeToCover', () => {
    // console.log(sizeToCover(100, 100, 200, 200));
    // console.log(sizeToCover(200, 100, 200, 200));
    // console.log(sizeToCover(300, 100, 200, 200));
    // console.log(sizeToCover(300, 200, 200, 200));
    // console.log(sizeToCover(300, 300, 200, 200));

    // console.log(sizeToCover(100, 100, 100, 200));
    // console.log(sizeToCover(200, 100, 100, 200));
    // console.log(sizeToCover(300, 100, 100, 200));
    // console.log(sizeToCover(300, 200, 100, 200));
    // console.log(sizeToCover(300, 300, 100, 200));

    // console.log(sizeToCover(100, 100, 200, 100));
    // console.log(sizeToCover(200, 100, 200, 100));
    // console.log(sizeToCover(300, 100, 200, 100));
    // console.log(sizeToCover(300, 200, 200, 100));
    // console.log(sizeToCover(300, 300, 200, 100));
    expect(sizeToCover(100, 100, 200, 200)).toEqual({ dx: 0, dy: 0, dw: 200, dh: 200 });
    expect(sizeToCover(200, 100, 200, 200)).toEqual({ dx: -100, dy: 0, dw: 400, dh: 200 });
    expect(sizeToCover(300, 100, 200, 200)).toEqual({ dx: -200, dy: 0, dw: 600, dh: 200 });
    expect(sizeToCover(300, 200, 200, 200)).toEqual({ dx: -50, dy: 0, dw: 300, dh: 200 });
    expect(sizeToCover(300, 300, 200, 200)).toEqual({ dx: 0, dy: 0, dw: 200, dh: 200 });

    expect(sizeToCover(100, 100, 100, 200)).toEqual({ dx: -50, dy: 0, dw: 200, dh: 200 });
    expect(sizeToCover(200, 100, 100, 200)).toEqual({ dx: -150, dy: 0, dw: 400, dh: 200 });
    expect(sizeToCover(300, 100, 100, 200)).toEqual({ dx: -250, dy: 0, dw: 600, dh: 200 });
    expect(sizeToCover(300, 200, 100, 200)).toEqual({ dx: -100, dy: 0, dw: 300, dh: 200 });
    expect(sizeToCover(300, 300, 100, 200)).toEqual({ dx: -50, dy: 0, dw: 200, dh: 200 });

    expect(sizeToCover(100, 100, 200, 100)).toEqual({ dx: 0, dy: -50, dw: 200, dh: 200 });
    expect(sizeToCover(200, 100, 200, 100)).toEqual({ dx: 0, dy: 0, dw: 200, dh: 100 });
    expect(sizeToCover(300, 100, 200, 100)).toEqual({ dx: -50, dy: 0, dw: 300, dh: 100 });
    // expect(sizeToCover(300, 200, 200, 100)).toEqual({ dx: 0, dy: -16.666..., dw: 200, dh: 133.333... });
    expect(sizeToCover(300, 300, 200, 100)).toEqual({ dx: 0, dy: -50, dw: 200, dh: 200 });
  });
});
