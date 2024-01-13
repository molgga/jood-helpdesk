import { inputFormatterKrw } from '../inputFormatterKrw';

describe('helpdesk-module: input-formatter: inputFormatterKrw', () => {

  test('포맷 테스트', () => {
    const formatter = inputFormatterKrw();
    formatter.setValue(null);
    expect(formatter.getValue()).toBe("");

    formatter.setValue((0).toString());
    expect(formatter.getValue()).toBe("0");

    formatter.setValue((1000).toString());
    expect(formatter.getValue()).toBe("1,000");

    formatter.setValue((123456789).toString());
    expect(formatter.getValue()).toBe("123,456,789");
  });
});