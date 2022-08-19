export const createSampleDates = () => {
  const sampleDates: Date[] = [];
  sampleDates.push((() => new Date())());
  sampleDates.push(
    (() => {
      const date = new Date();
      date.setMinutes(date.getMinutes() - 1);
      return date;
    })()
  );
  sampleDates.push(
    (() => {
      const date = new Date();
      date.setMinutes(date.getMinutes() - 5);
      return date;
    })()
  );
  sampleDates.push(
    (() => {
      const date = new Date();
      date.setMinutes(date.getMinutes() - 59);
      return date;
    })()
  );
  sampleDates.push(
    (() => {
      const date = new Date();
      date.setHours(date.getHours() - 1);
      return date;
    })()
  );
  sampleDates.push(
    (() => {
      const date = new Date();
      date.setHours(date.getHours() - 24);
      return date;
    })()
  );
  sampleDates.push(
    (() => {
      const date = new Date();
      date.setHours(date.getHours() - 24 * 7);
      return date;
    })()
  );
  sampleDates.push(
    (() => {
      const date = new Date();
      date.setHours(date.getHours() - 24 * 30);
      return date;
    })()
  );
  sampleDates.push(
    (() => {
      const date = new Date();
      date.setHours(date.getHours() - 24 * 45);
      return date;
    })()
  );
  sampleDates.push((() => null as any)());
  sampleDates.push(
    (() => {
      const date = new Date();
      date.setHours(date.getHours() + 24);
      return date;
    })()
  );
  return sampleDates;
};
