import { DynamicModule, Module } from '@nestjs/common'
import { ConfigModule, ConfigModuleOptions, ConfigService } from '@nestjs/config'
import { join } from 'node:path'


@Module({})
export class EnvConfigModule {
    static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
        return {
            module: EnvConfigModule, // Define explicitamente o módulo[]
            imports: [
                ConfigModule.forRoot({
                    ...options, // Permite opções personalizáveis
                    envFilePath: [
                        join(
                            __dirname,
                            `../../../../.env.${process.env.NODE_ENV}`,
                        ), // Define o caminho do arquivo .env
                    ],
                }),
            ],
            providers: [ConfigService], // Garantir que o ConfigService esteja disponível
            exports: [ConfigService],
        }
    }
}
