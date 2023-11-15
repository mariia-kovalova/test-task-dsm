import { deleteAsync } from "del";

export const reset = () => {
  const { path } = app;

  return deleteAsync(path.clean);
};
