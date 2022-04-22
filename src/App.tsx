import { ButtonAppBar } from "./components/appbar";
import { EnhancedTable } from "./components/table";
import { BasicCard } from "./components/card";

import styled from "styled-components";

export const App = () => {
  return (
    <Root>
      <Grid>
        <AppBarStyle>
          <ButtonAppBar />
        </AppBarStyle>
        <TableStyle>
          <EnhancedTable />
        </TableStyle>
        <CardStyle>
          <BasicCard />
        </CardStyle>
      </Grid>
    </Root>
  );
};

const Root = styled.div`
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 20px auto;
  grid-template-columns: 20px 2fr 20px 1fr 20px;
`;

const AppBarStyle = styled.div`
  grid-row: 1;
  grid-column: 2/-2;
`;

const TableStyle = styled.div`
  grid-row: 3;
  grid-column: 2;
`;

const CardStyle = styled.div`
  grid-row: 3;
  grid-column: 4;
`;
