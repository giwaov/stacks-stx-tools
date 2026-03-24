# STX Tools

## Batch Transfer
Send STX to multiple recipients.
```clarity
(batch-transfer (list {to: principal, amount: uint} ...))
```

## Time Lock
Lock STX until a block height.
```clarity
(time-lock u1000000 u150000)
```

## Fee Estimator
Estimate transaction fees.

## Security
- Locked funds only withdrawable by depositor
- Batch transfers are atomic
