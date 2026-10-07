import type { ConnectorStatus, ProductObservation, Platform } from "../types";
export interface DealConnector { platform:Platform; status():ConnectorStatus; fetchDeals():Promise<ProductObservation[]>; }
