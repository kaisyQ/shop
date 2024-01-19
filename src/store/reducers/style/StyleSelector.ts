import { RootState } from "store/store";

export const getIsDark = (state: RootState) => state.styles.isDark;