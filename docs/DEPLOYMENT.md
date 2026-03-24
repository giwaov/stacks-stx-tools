# Deployment Guide - stacks-stx-tools

## Network Configuration

### Testnet

Update `settings/Testnet.toml`:

```toml
[network]
name = "testnet"

[accounts.deployer]
mnemonic = "<your-testnet-mnemonic>"
```

### Mainnet

Update `settings/Mainnet.toml`:

```toml
[network]
name = "mainnet"

[accounts.deployer]
mnemonic = "<your-mainnet-mnemonic>"
```

## Deploy Commands

```bash
# Testnet deployment
clarinet deploy --testnet

# Mainnet deployment
clarinet deploy --mainnet
```

## Post-Deployment Verification

1. Check the [Stacks Explorer](https://explorer.stacks.co) for your contract
2. Verify contract source matches deployment
3. Test public functions via Explorer or CLI

## Monitoring

Monitor contract activity via:
- Stacks Explorer
- Hiro API: `https://api.mainnet.hiro.so/extended/v1/contract/<address>.<name>`
