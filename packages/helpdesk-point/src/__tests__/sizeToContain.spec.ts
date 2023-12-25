import { sizeToContain } from '../sizeToContain';

describe('utils/point/sizeToContain', () => {
  test('sizeToContain', () => {
    // console.log(sizeToContain(100, 100, 200, 200));
    // console.log(sizeToContain(200, 100, 200, 200));
    // console.log(sizeToContain(300, 100, 200, 200));
    // console.log(sizeToContain(300, 200, 200, 200));
    // console.log(sizeToContain(300, 300, 200, 200));

    // console.log(sizeToContain(100, 100, 100, 200));
    // console.log(sizeToContain(200, 100, 100, 200));
    // console.log(sizeToContain(300, 100, 100, 200));
    // console.log(sizeToContain(300, 200, 100, 200));
    // console.log(sizeToContain(300, 300, 100, 200));
    
    // console.log(sizeToContain(100, 100, 200, 100));
    // console.log(sizeToContain(200, 100, 200, 100));
    // console.log(sizeToContain(300, 100, 200, 100));
    // console.log(sizeToContain(300, 200, 200, 100));
    // console.log(sizeToContain(300, 300, 200, 100));
    expect(sizeToContain(100, 100, 200, 200)).toEqual({ dx: 50, dy: 50, dw: 100, dh: 100 });
    expect(sizeToContain(200, 100, 200, 200)).toEqual({ dx: 0, dy: 50, dw: 200, dh: 100 });
    expect(sizeToContain(300, 100, 200, 200)).toEqual({ dx: 0, dy: 67, dw: 200, dh: 66 });
    expect(sizeToContain(300, 200, 200, 200)).toEqual({ dx: 0, dy: 33.5, dw: 200, dh: 133 });
    expect(sizeToContain(300, 300, 200, 200)).toEqual({ dx: 0, dy: 0, dw: 200, dh: 200 });

    expect(sizeToContain(100, 100, 100, 200)).toEqual({ dx: 0, dy: 50, dw: 100, dh: 100 });
    expect(sizeToContain(200, 100, 100, 200)).toEqual({ dx: 0, dy: 75, dw: 100, dh: 50 });
    expect(sizeToContain(300, 100, 100, 200)).toEqual({ dx: 0, dy: 83.5, dw: 100, dh: 33 });
    expect(sizeToContain(300, 200, 100, 200)).toEqual({ dx: 0, dy: 67, dw: 100, dh: 66 });
    expect(sizeToContain(300, 300, 100, 200)).toEqual({ dx: 0, dy: 50, dw: 100, dh: 100 });

    expect(sizeToContain(100, 100, 200, 100)).toEqual({ dx: 50, dy: 0, dw: 100, dh: 100 });
    expect(sizeToContain(200, 100, 200, 100)).toEqual({ dx: 0, dy: 0, dw: 200, dh: 100 });
    expect(sizeToContain(300, 100, 200, 100)).toEqual({ dx: 0, dy: 17, dw: 200, dh: 66 });
    expect(sizeToContain(300, 200, 200, 100)).toEqual({ dx: 25, dy: 0, dw: 150, dh: 100 });
    expect(sizeToContain(300, 300, 200, 100)).toEqual({ dx: 50, dy: 0, dw: 100, dh: 100 });
  });
});
