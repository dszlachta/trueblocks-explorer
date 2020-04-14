# Step 3b - Configuration - Scraper

The remainder of this wizard guides you through the process of configuring TrueBlocks. There are four components that must be configured:

- _Data API_,
- _Backend Data Servers_,
- _Ethereum Node Server_, and
- _Sharing Server_ (optional)

We will consider each component seperately. TrueBlocks will not proceed to the next step until the current setup is resolved (i.e. the **NEXT** button will be disabled). Once all components are properly configured, you may revisit the setup by clicking on one of the four **Status Pills** at the top right of the screen.

## The Data API

1. Check to see if the **Data API** is running..._most likely it is._

   - If the API Pill at the top of the screen says `api: ok`...
   - and the `api`, `cache`, and `index` rows of the **OPTIONS** section of the **Status Panel** indicate values...
   - and the **Software Version** for TrueBlocks is presented...
   - and the **NEXT** button in the Navigation pane is lit...
   - Press the **NEXT** button.

2. If the **Data API** is not running properly, you won't be able to continue until it is (the **NEXT** button will be disabled).

If the **Data API** is not running, you will see red **Status Pills** at the top of the screen, the **Status** messages for both the Ethereum Node and TrueBlocks will be red, and you will see a large, red error message asking, `Is the API running?`. If any of these things are true, you must fix the configuration before proceeding.

## Action

When the Status Panel properly shows TrueBlocks' version number, press **NEXT** to proceed.
