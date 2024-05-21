import { Router } from 'express';
import SystemStatusController from './components/system-status/system-status.controller';
import TestController from './components/test/test.controller';
/**
 * Here, you can register routes by instantiating the controller.
 *
 */
export default function registerRoutes(): Router {
	const router = Router();

	// System Status Controller
	const systemStatusController: SystemStatusController =
		new SystemStatusController();
	router.use('/system', systemStatusController.register());

	// System Status Controller
	const testController: TestController =
		new TestController();
	router.use('/test', testController.register());

	return router;
}
