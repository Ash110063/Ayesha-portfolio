export const SERVICE_EVENT = "select-service";

export const selectService = (index: number) =>
  window.dispatchEvent(
    new CustomEvent<number>(SERVICE_EVENT, { detail: index }),
  );
