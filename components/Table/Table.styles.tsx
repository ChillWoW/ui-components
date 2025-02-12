import { createStyles } from "@mantine/emotion";
import { MOBILE_BREAKPOINT } from "@/utils/breakpoints";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
  },

  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    fontSize: 14,

    [`@media (max-width: ${MOBILE_BREAKPOINT}px)`]: {
      fontSize: 12,
      minWidth: 500,
    },
  },

  thead: {
    backgroundColor: theme.colors.dark[7],
  },

  th: {
    textAlign: "left",
    padding: "12px 16px",
    fontWeight: 600,
    color: theme.colors.gray[3],
    borderBottom: `1px solid ${theme.colors.dark[4]}`,
    whiteSpace: "nowrap",
    position: "relative",
    transition: "background-color 0.2s",

    "&:hover": {
      backgroundColor: theme.colors.dark[6],
    },

    [`@media (max-width: ${MOBILE_BREAKPOINT}px)`]: {
      padding: "8px 12px",
    },
  },

  td: {
    padding: "12px 16px",
    borderBottom: `1px solid ${theme.colors.dark[4]}`,
    color: theme.white,

    [`@media (max-width: ${MOBILE_BREAKPOINT}px)`]: {
      padding: "8px 12px",
    },
  },

  tr: {
    transition: "background-color 0.2s",

    "&:hover": {
      backgroundColor: theme.colors.dark[7],
    },
  },

  striped: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.colors.dark[7],
    },
  },

  highlightOnHover: {
    "&:hover": {
      backgroundColor: theme.colors.dark[6],
    },
  },

  withBorder: {
    border: `1px solid ${theme.colors.dark[4]}`,
  },

  sortButton: {
    all: "unset",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    width: "100%",
    height: "100%",
  },

  sortIcon: {
    color: theme.colors.gray[5],
    transition: "transform 0.2s",
  },

  sortActive: {
    color: theme.colors.blue[5],
  },
}));

export default useStyles;
