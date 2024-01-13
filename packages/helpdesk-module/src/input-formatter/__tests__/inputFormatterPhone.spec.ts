import { inputFormatterPhone } from '../inputFormatterPhone';

describe('helpdesk-module: input-formatter: inputFormatterPhone', () => {

  test('포맷 테스트', () => {
    const formatter = inputFormatterPhone();
    formatter.setValue('');
    expect(formatter.getValue()).toBe("");
    formatter.setValue('010');
    expect(formatter.getValue()).toBe("010");

    formatter.setValue('0101');
    expect(formatter.getValue()).toBe("010-1");

    formatter.setValue('010123');
    expect(formatter.getValue()).toBe("010-123");

    formatter.setValue('0101234');
    expect(formatter.getValue()).toBe("010-123-4");

    formatter.setValue('0101234567');
    expect(formatter.getValue()).toBe("010-123-4567");

    formatter.setValue('01012345678');
    expect(formatter.getValue()).toBe("010-1234-5678");
  });
});