import { Injectable } from '@nestjs/common';
import { BigQuery } from '@google-cloud/bigquery';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QueriesService {
  constructor(private readonly configService: ConfigService) {}

  QUERY = `SELECT *
    FROM \`${this.configService.get<string>('BQ_TABLE_NAME')}\`
    LIMIT 1000
  `;

  QUERY_OPTION_BASE = {
    query: this.QUERY,
    location: 'asia-northeast1',
  };

  async run(): Promise<string> {
    const bigquery = new BigQuery();
    const [job] = await bigquery.createQueryJob(this.QUERY_OPTION_BASE);
    console.log(`Job ${job.id} started.`);
    console.log(`status: ${job.metadata.status}`);
    console.log(`cost: ${job.metadata.statistics.totalBytesProcessed} bytes`);
    const [rows] = await job.getQueryResults();
    return JSON.stringify(rows);
  }

  async dryRun(): Promise<object> {
    const bigquery = new BigQuery();
    const options = {
      ...this.QUERY_OPTION_BASE,
      dryRun: true,
    };
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);
    return {
      status: job.metadata.status,
      statistics: job.metadata.statistics,
    };
  }

  async findAll(): Promise<string> {
    return this.run();
  }

  async findAllDry(): Promise<object> {
    return this.dryRun();
  }
}
