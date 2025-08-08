# Troubleshooting

Summary of common problems encountered and their resolution steps.

```sh
NAMESPACE                NAME                                             READY   STATUS                       RESTARTS        AGE
americanfootball-ncaaf   americanfootball-ncaaf-american-29243168-b6bk7   0/1     CreateContainerConfigError   0               2m26s
americanfootball-ncaaf   americanfootball-ncaaf-american-29243170-j89l9   0/1     CreateContainerConfigError   0               26s
americanfootball-ncaaf   americanfootball-ncaaf-decimal-29243168-lhlc2    0/1     CreateContainerConfigError   0               2m26s
americanfootball-ncaaf   americanfootball-ncaaf-decimal-29243170-djhdn    0/1     CreateContainerConfigError   0               26s
americanfootball-nfl     americanfootball-nfl-american-29243168-qdnkw     0/1     CreateContainerConfigError   0               2m26s
americanfootball-nfl     americanfootball-nfl-american-29243170-2tvd4     0/1     CreateContainerConfigError   0               26s
americanfootball-nfl     americanfootball-nfl-decimal-29243168-gcwh9      0/1     CreateContainerConfigError   0               2m26s
americanfootball-nfl     americanfootball-nfl-decimal-29243170-9h86b      0/1     CreateContainerConfigError   0               26s
```

The resolution is to execute the NPM Task to create the **ConfigMaps** required to initialize the containers correctly.

```sh
# Create ConfigMaps
npm run k8s-config
```

Once the **ConfigMaps** exist, the container configurations should initialize successfully.
