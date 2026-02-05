"use client";

import { Box, Table } from "@radix-ui/themes";
import { formatNumberToString } from "@/shared/utils/format-util";
import { useOrderStore } from "@/app/_features/orders/useOrderStore";
import { useEffect } from "react";

export const OrdersHistory = () => {
  const history = useOrderStore((state) => state.history);
  const refreshHistory = useOrderStore((state) => state.refreshHistory);

  useEffect(() => {
    refreshHistory();
  }, []);

  return (
    <Box className={"py-4 rounded-2xl border border-border-tertiary"}>
      <Table.Root variant="surface" className={"orders-history"}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>거래 ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>거래 일시</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>매수 금액</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>체결 환율</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>매도 금액</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {history.map((item) => (
            <Table.Row key={item.orderId}>
              <Table.RowHeaderCell>{item.orderId}</Table.RowHeaderCell>
              <Table.Cell width={"180px"}>{item.orderedAt}</Table.Cell>
              <Table.Cell>
                {formatNumberToString(item.fromAmount, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </Table.Cell>
              <Table.Cell>{item.appliedRate}</Table.Cell>
              <Table.Cell>
                {formatNumberToString(item.toAmount, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};
